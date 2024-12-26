import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { CiSquarePlus } from "react-icons/ci";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button>
          <CiSquarePlus className="w-7 h-7" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[120vh] ">
        <DialogHeader>
          <DialogTitle>POST</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Textarea id="post" placeholder="post something..." className="col-span-4" />
          </div>
          <DialogTitle>
              TAGS
              <Input
                id="tags"
                placeholder="tags"
                className="col-span-3 mt-2"
              />
            </DialogTitle>
          <div className="grid grid-cols-4 items-center gap-4">
            <DialogTitle>
              PHOTO&VIDEO
              <Input
                id="file"
                type="file"

                className="col-span-3 mt-2"
              />
            </DialogTitle>

          </div>
        </div>
        <DialogFooter>
          <Button type="submit">POST</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
