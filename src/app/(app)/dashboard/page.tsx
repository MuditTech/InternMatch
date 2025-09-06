'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Activity, CheckCircle, Mail } from "lucide-react"
import { useLanguage } from "@/components/language-provider";
import { useEffect, useState } from "react";

const generateData = (t: any) => [
  { name: t.months.jan, total: Math.floor(Math.random() * 20) + 1 },
  { name: t.months.feb, total: Math.floor(Math.random() * 20) + 1 },
  { name: t.months.mar, total: Math.floor(Math.random() * 20) + 1 },
  { name: t.months.apr, total: Math.floor(Math.random() * 20) + 1 },
  { name: t.months.may, total: Math.floor(Math.random() * 20) + 1 },
  { name: t.months.jun, total: Math.floor(Math.random() * 20) + 1 },
];

export default function DashboardPage() {
  const { t } = useLanguage();
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    setData(generateData(t));
  }, [t]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">{t.welcomeBack}</h1>
        <p className="text-muted-foreground">{t.dashboardSubtitle}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t.profileCompletion}
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">90%</div>
            <p className="text-xs text-muted-foreground">
              {t.profileCompletionSubtitle}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t.activeApplications}
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              {t.activeApplicationsSubtitle}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t.newMessages}</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              {t.newMessagesSubtitle}
            </p>
          </CardContent>
        </Card>
      </div>

       <Card>
          <CardHeader>
            <CardTitle>{t.applicationTrends}</CardTitle>
            <CardDescription>{t.applicationTrendsSubtitle}</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={data}>
                <XAxis
                  dataKey="name"
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#888888"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <Bar dataKey="total" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
    </div>
  )
}
