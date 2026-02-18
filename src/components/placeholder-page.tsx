import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Construction } from "lucide-react"

export default function PlaceholderPage({ title }: { title: string }) {
    return (
        <div className="flex h-full flex-col items-center justify-center space-y-4 p-8 text-center animate-in fade-in zoom-in duration-500">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                <Construction className="h-10 w-10 text-muted-foreground" />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
            <p className="text-lg text-muted-foreground max-w-md">
                This module is currently under development. Check back later for updates.
            </p>
        </div>
    )
}
