"use client"

import * as React from "react"
import Link from "next/link"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Search, MoreHorizontal } from "lucide-react"
import { motion } from "framer-motion"

const patients = [
    {
        id: "1",
        name: "Max",
        species: "Canine",
        breed: "Golden Retriever",
        owner: "John Doe",
        lastVisit: "2023-10-25",
        status: "Healthy",
        avatar: "JD"
    },
    {
        id: "2",
        name: "Luna",
        species: "Feline",
        breed: "Siamese",
        owner: "Sarah Smith",
        lastVisit: "2023-11-02",
        status: "Due for Vaccine",
        avatar: "SS"
    },
    {
        id: "3",
        name: "Rocky",
        species: "Canine",
        breed: "Bulldog",
        owner: "Mike Johnson",
        lastVisit: "2023-10-15",
        status: "Treatment",
        avatar: "MJ"
    },
    {
        id: "4",
        name: "Bella",
        species: "Canine",
        breed: "Poodle",
        owner: "Emily Davis",
        lastVisit: "2023-11-05",
        status: "Healthy",
        avatar: "ED"
    },
    {
        id: "5",
        name: "Simba",
        species: "Feline",
        breed: "Maine Coon",
        owner: "Chris Wilson",
        lastVisit: "2023-09-20",
        status: "Chronic",
        avatar: "CW"
    }
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
}

const item = {
    hidden: { y: 10, opacity: 0 },
    show: { y: 0, opacity: 1 }
}

export default function PatientsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Patients</h1>
                    <p className="text-muted-foreground">Manage your patient records.</p>
                </div>
                <Button>
                    <Plus className="mr-2 h-4 w-4" /> New Patient
                </Button>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search patients..." className="pl-9" />
                </div>
                <Button variant="outline">Filter</Button>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Patient</TableHead>
                            <TableHead>Species / Breed</TableHead>
                            <TableHead>Owner</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Last Visit</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <motion.tbody
                        className="[&_tr:last-child]:border-0"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        {patients.map((patient) => (
                            <motion.tr
                                key={patient.id}
                                className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted cursor-pointer"
                                variants={item}
                            // In a real app, use router.push on click or wrap in Link
                            >
                                <TableCell className="font-medium">
                                    <Link href={`/patients/${patient.id}`} className="flex items-center gap-3 hover:underline">
                                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                                            {patient.name.substring(0, 2).toUpperCase()}
                                        </div>
                                        {patient.name}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    <div className="flex flex-col">
                                        <span>{patient.species}</span>
                                        <span className="text-xs text-muted-foreground">{patient.breed}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{patient.owner}</TableCell>
                                <TableCell>
                                    <Badge variant={patient.status === "Healthy" ? "outline" : "secondary"}>
                                        {patient.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>{patient.lastVisit}</TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="icon">
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </motion.tr>
                        ))}
                    </motion.tbody>
                </Table>
            </div>
        </div>
    )
}
