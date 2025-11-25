import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { useTranslation } from "@/i18n";
import { Link } from "wouter";

export default function NotFound() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6 space-y-4">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-destructive" />
            <h1 className="text-2xl font-bold">{t('notFound.title')}</h1>
          </div>

          <p className="text-sm text-muted-foreground">
            {t('notFound.message')}
          </p>
          
          <Link href="/">
            <Button className="w-full bg-gradient-to-r from-[#5C00AB] to-[#2D67CE]">
              {t('notFound.backHome')}
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
