"use client";

import AlertsList from "@/components/alerts-list";
import ExamsList from "@/components/exams-list";
import FeaturesGrid from "@/components/features-grid";
import Scores from "@/components/scores";
import Search from "@/components/search";

import { BrowserView } from "react-device-detect";

import React from "react";

export default function Main() {
  return (
    <div className="px-4 md:px-6">
      <div className="py-6 gap-6 flex flex-col md:flex-row md:items-center">
        <div className="flex-1">
          <h3 className="font-medium text-xl">Bentornato Salvatore.</h3>
          <p className="text-sm text-muted-foreground">
            Hai 3 nuovi avvisi e 2 nuove notifiche non lette.
          </p>
        </div>

        <Search />
      </div>

      <div className="flex flex-col md:flex-row gap-3 md:gap-6 pb-6">
        <div className="flex flex-col gap-6">
          <ExamsList />
          <Scores />
        </div>
        <div className="divide-y flex-1">
          <FeaturesGrid />
          <AlertsList />
        </div>
      </div>
    </div>
  );
}
