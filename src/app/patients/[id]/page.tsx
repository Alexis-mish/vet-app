"use client"

import * as React from "react"
import { useParams } from "next/navigation"
import {
    Calendar,
    Cat,
    Dog,
    Clock,
    FileText,
    Save,
    Mic,
    MoreHorizontal,
    Activity,
    Thermometer,
    Weight,
    Heart
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"

export default function PatientPage() {
    const params = useParams()
    // In a real app, fetch patient by params.id
    const patient = {
        name: "Max",
        species: "Canine",
        breed: "Golden Retriever",
        age: "5y 2m",
        sex: "Male Intact",
        weight: "32.5 kg",
        owner: "John Doe"
    }

    return (
        <div className="space-y-6 pb-20">
            {/* Patient Header */}
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                        <Dog className="h-8 w-8" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">{patient.name}</h1>
                        <div className="flex flex-wrap gap-2 text-muted-foreground">
                            <span className="flex items-center gap-1"><span className="font-semibold text-foreground">{patient.species}</span></span>
                            <span>•</span>
                            <span>{patient.breed}</span>
                            <span>•</span>
                            <span>{patient.sex}</span>
                            <span>•</span>
                            <span>{patient.age}</span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">History</Button>
                    <Button>Active Visit</Button>
                </div>
            </div>

            {/* Quick Vitals / Pulse */}
            <div className="grid gap-4 md:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Weight</CardTitle>
                        <Weight className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{patient.weight}</div>
                        <p className="text-xs text-muted-foreground">No change since last visit</p>
                    </CardContent>
                </Card>
                {/* Placeholders for other vitals */}
            </div>

            {/* EMR Tabs */}
            <Tabs defaultValue="soap" className="w-full">
                <TabsList>
                    <TabsTrigger value="soap">SOAP Note</TabsTrigger>
                    <TabsTrigger value="vaccines">Vaccines & Prev.</TabsTrigger>
                    <TabsTrigger value="labs">Labs & Imaging</TabsTrigger>
                    <TabsTrigger value="docs">Estimates & Docs</TabsTrigger>
                </TabsList>

                <TabsContent value="soap" className="space-y-6 py-4">
                    <div className="grid gap-6 md:grid-cols-3">
                        {/* Main SOAP Column */}
                        <div className="space-y-6 md:col-span-2">
                            <Card className="border-l-4 border-l-blue-500">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="flex items-center gap-2">
                                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs text-blue-600">S</span>
                                            Subjective
                                        </CardTitle>
                                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                            <Mic className="h-4 w-4 text-blue-500" />
                                        </Button>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <label className="text-sm font-medium">Presenting Complaint</label>
                                        <Input placeholder="e.g. Vomiting since yesterday" autoFocus />
                                    </div>
                                    <div className="grid gap-2">
                                        <label className="text-sm font-medium">History</label>
                                        <Textarea placeholder="Detailed history..." className="min-h-[100px]" />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-l-green-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-xs text-green-600">O</span>
                                        Objective
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                                        <div className="space-y-1">
                                            <label className="text-xs font-medium text-muted-foreground">Temp (°C)</label>
                                            <Input placeholder="38.5" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-medium text-muted-foreground">HR (bpm)</label>
                                            <Input placeholder="100" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-medium text-muted-foreground">RR (rpm)</label>
                                            <Input placeholder="24" />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-medium text-muted-foreground">CRT (s)</label>
                                            <Input placeholder="<2" />
                                        </div>
                                    </div>
                                    <div className="grid gap-2">
                                        <label className="text-sm font-medium">Exam Notes</label>
                                        <Textarea placeholder="Physical exam findings..." />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-l-amber-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-xs text-amber-600">A</span>
                                        Assessment
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <label className="text-sm font-medium">Diagnosis / Differential</label>
                                        <div className="relative">
                                            <Input placeholder="Search ICD-10 / Custom codes..." />
                                            {/* Simulate autocomplete dropdown here if needed */}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-l-4 border-l-red-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-xs text-red-600">P</span>
                                        Plan
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid gap-2">
                                        <label className="text-sm font-medium">Treatments & Rx</label>
                                        <Textarea placeholder="Medications, procedures, etc..." />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Sidebar: Smart Suggestions / History */}
                        <div className="space-y-6">
                            <Card className="bg-muted/50">
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-sm font-medium">Smart Suggestions</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="rounded-md border bg-background p-3 text-sm">
                                        <p className="font-medium text-amber-600">Vaccine Due</p>
                                        <p className="text-xs text-muted-foreground">Rabies booster is due next month.</p>
                                        <Button variant="outline" size="sm" className="mt-2 w-full">Add to Plan</Button>
                                    </div>
                                    <div className="rounded-md border bg-background p-3 text-sm">
                                        <p className="font-medium text-blue-600">Flea/Tick</p>
                                        <p className="text-xs text-muted-foreground">Last dispensed 6 months ago.</p>
                                        <Button variant="outline" size="sm" className="mt-2 w-full">Dispense</Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader className="pb-2">
                                    <CardTitle className="text-sm font-medium">Recent Weight History</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="h-[100px] flex items-center justify-center border border-dashed rounded bg-muted/20">
                                        <span className="text-xs text-muted-foreground">Sparkline Chart</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </TabsContent>
            </Tabs>

            {/* Sticky Action Bar */}
            <div className="fixed bottom-0 right-0 left-0 border-t bg-background/80 p-4 backdrop-blur-md md:left-64 md:pl-8">
                <div className="mx-auto flex max-w-5xl items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                        Last saved: Just now
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline">Save as Draft</Button>
                        <Button className="gap-2">
                            <Save className="h-4 w-4" />
                            Finalize & Invoice
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
