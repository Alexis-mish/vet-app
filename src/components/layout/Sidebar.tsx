"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
    LayoutDashboard,
    Users,
    Stethoscope,
    Calendar,
    Package,
    FileText,
    Settings,
    Menu,
    X
} from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
    { href: "/", label: "Dashboard", icon: LayoutDashboard },
    { href: "/patients", label: "Patients", icon: Users },
    { href: "/consultations", label: "Consultations", icon: Stethoscope },
    { href: "/appointments", label: "Appointments", icon: Calendar },
    { href: "/inventory", label: "Inventory", icon: Package },
    { href: "/billing", label: "Billing", icon: FileText },
    { href: "/settings", label: "Settings", icon: Settings },
]

export function Sidebar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = React.useState(true)

    return (
        <aside
            className={cn(
                "relative hidden h-screen border-r bg-background/80 backdrop-blur-xl transition-all duration-300 ease-in-out md:flex md:flex-col",
                isOpen ? "w-64" : "w-16"
            )}
        >
            <div className="flex h-14 items-center justify-between border-b px-4">
                {isOpen && (
                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                        VET-NEXUS
                    </span>
                )}
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn("h-8 w-8", !isOpen && "mx-auto")}
                >
                    {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                </Button>
            </div>
            <nav className="space-y-2 p-2">
                {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = pathname === item.href

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center space-x-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                                isActive ? "bg-primary/10 text-primary" : "text-muted-foreground",
                                !isOpen && "justify-center px-0"
                            )}
                        >
                            <Icon className="h-5 w-5" />
                            {isOpen && <span>{item.label}</span>}
                        </Link>
                    )
                })}
            </nav>

            {isOpen ? (
                <div className="absolute bottom-4 left-4 right-4">
                    <div className="rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-4">
                        <p className="text-xs font-semibold text-primary">Pro Plan</p>
                        <p className="text-[10px] text-muted-foreground">Expires in 12 days</p>
                    </div>
                </div>
            ) : null}
        </aside>
    )
}
