import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useTranslation } from "@/i18n";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Loader2, CheckCircle2 } from "lucide-react";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "contact" | "quote";
}

export function ContactDialog({ open, onOpenChange, type }: ContactDialogProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useTranslation();
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: t('contactDialog.successTitle'),
        description: t('contactDialog.successDesc'),
      });
      setTimeout(() => {
        onOpenChange(false);
        setIsSubmitted(false);
        form.reset();
      }, 2000);
    },
    onError: () => {
      toast({
        title: t('contactDialog.errorTitle'),
        description: t('contactDialog.errorDesc'),
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] backdrop-blur-lg bg-card/95 border-primary/30 shadow-[0_0_50px_rgba(92,0,171,0.4)]">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl bg-gradient-to-r from-[#5C00AB] to-[#7CC7D8] bg-clip-text text-transparent">
                {type === "contact" ? t('contactDialog.titleContact') : t('contactDialog.titleQuote')}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                {t('contactDialog.description')}
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contactDialog.name')}</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder={t('contactDialog.namePlaceholder')} 
                          {...field} 
                          data-testid="input-contact-name"
                          className="border-input bg-background/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contactDialog.email')}</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder={t('contactDialog.emailPlaceholder')} 
                          {...field} 
                          data-testid="input-contact-email"
                          className="border-input bg-background/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contactDialog.phone')}</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel"
                          placeholder={t('contactDialog.phonePlaceholder')} 
                          {...field} 
                          value={field.value || ""}
                          data-testid="input-contact-phone"
                          className="border-input bg-background/50"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contactDialog.message')}</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder={type === "quote" ? t('contactDialog.messagePlaceholderQuote') : t('contactDialog.messagePlaceholder')}
                          className="min-h-[120px] resize-none border-input bg-background/50"
                          {...field}
                          data-testid="input-contact-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#5C00AB] to-[#2D67CE] hover:shadow-[0_0_30px_rgba(92,0,171,0.6)] transition-all duration-300"
                  disabled={contactMutation.isPending}
                  data-testid="button-contact-submit"
                >
                  {contactMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t('contactDialog.sending')}
                    </>
                  ) : (
                    t('contactDialog.submit')
                  )}
                </Button>
              </form>
            </Form>
          </>
        ) : (
          <div className="py-12 text-center space-y-6">
            <div className="flex justify-center">
              <CheckCircle2 className="w-20 h-20 text-[#7CC7D8]" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-foreground">{t('contactDialog.sentTitle')}</h3>
              <p className="text-muted-foreground">
                {t('contactDialog.sentMessage')}
              </p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
