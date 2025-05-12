import React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export const DemoDialog: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Umów demo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Umów demo</DialogTitle>
          <DialogDescription>
            Wypełnij formularz, aby umówić się na prezentację systemu.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
} 