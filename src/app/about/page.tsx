"use client";

import {Navbar} from "@/components/Navbar";
import {useState} from "react";
import {translations} from "@/lib/i18n";
import {Lightbulb, Target, Trophy} from "lucide-react";

export default function About() {
  const [lang, setLang] = useState<"en" | "pt">("pt");
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-background">
      <Navbar lang={lang} setLang={setLang} />

      <main className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">{t.about.title}</h1>
          <p className="text-lg text-muted-foreground mb-12">
            {t.about.content}
          </p>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              {t.about.mission.title}
            </h2>
            <p className="text-muted-foreground">{t.about.mission.content}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-6">
              {t.about.values.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg">
                <Lightbulb className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {t.about.values.innovation}
                </h3>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <Trophy className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {t.about.values.quality}
                </h3>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <Target className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {t.about.values.results}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
