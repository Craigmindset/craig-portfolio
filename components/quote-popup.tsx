"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function QuotePopup() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if the popup has been shown before
    const hasSeenPopup = localStorage.getItem("hasSeenQuotePopup")

    if (!hasSeenPopup) {
      // Wait a moment before showing the popup for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [])

  const closePopup = () => {
    setIsVisible(false)
    // Mark that the user has seen the popup
    localStorage.setItem("hasSeenQuotePopup", "true")
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePopup}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full"
          >
            <Card className="border-none shadow-xl bg-background/95 backdrop-blur-sm">
              <CardContent className="p-6 pt-9">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={closePopup}
                  aria-label="Close quote popup"
                >
                  <X className="h-4 w-4" />
                </Button>

                <div className="text-center">
                  <p className="text-xl md:text-2xl font-medium mb-4 font-poppins leading-relaxed">
                    &ldquo;Coding is like a game of chess, the moves are all the same! but its how you play that
                    matters&rdquo;
                  </p>
                  <p className="text-primary font-medium">Craig Iredia, 2021</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
