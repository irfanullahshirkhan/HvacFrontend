import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MapPin, X } from "lucide-react";
import Image from "next/image";

export default function LocationDialog({
  open,
  onOpenChange,
  onFind,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onFind: () => void;
}) {
  const [zip, setZip] = React.useState("");
  const [error, setError] = React.useState("");

  function handleFind() {
    if (!zip || zip.length < 5) {
      setError("Enter a Valid ZIP Code");
    } else {
      setError("");
      // handle valid zip
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl rounded-2xl p-0 overflow-hidden">
        <div className="flex flex-col items-center px-8 py-8 relative">
          <DialogClose asChild>
            <button className="absolute top-4 right-4 text-[#29508a] hover:bg-gray-100 rounded-full p-1">
              <X className="w-6 h-6" />
            </button>
          </DialogClose>
          <Image
            src="/images/logo.webp"
            alt="Logo"
            width={180}
            height={40}
            className="mb-4"
          />
          <div className="text-[#22314f] text-xl font-semibold mb-2 text-center">
            Tell us where you're located
          </div>
          <div className="w-full flex items-center mt-2 mb-1 bg-[#f6f8fb] border border-[#e3e8f0] rounded-xl overflow-hidden">
            <input
              type="text"
              placeholder="Enter ZIP Code"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              className="flex-1 bg-transparent px-4 py-3 text-lg outline-none "
            />
            <Button
              type="button"
              className=" rounded-full h-full px-6 bg-[#003087] hover:bg-[#002060] text-white font-semibold text-base"
              onClick={() => {
                /* geolocation logic */
              }}
            >
              <MapPin className="w-5 h-5 mr-2" /> Use My Location
            </Button>
          </div>
          {error && (
            <div className="w-full text-left text-red-600 font-medium mt-2 mb-1">
              {error}
            </div>
          )}
          <Button
            type="button"
            className="w-full mt-2 bg-[#003087] hover:bg-[#002060] text-white text-lg font-bold py-4 rounded-xl"
            onClick={handleFind}
          >
            Find Local Help
          </Button>
          <div className="w-full text-left text-xs text-[#22314f] mt-2">
            *Indicates a required field
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
