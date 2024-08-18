import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useState } from "react";
import axios from "axios";
import { Pen } from "lucide-react";

interface ModalProps {
  onCreate: (newExpense: any) => void;
}

const EditModal = ({ onCreate }: ModalProps) => {
  const [itemName, setItemName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("personal");
  const [priority, setPriority] = useState("mid");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const numericAmount = parseFloat(amount);

      const response = await axios.post("/api/v1/expense", {
        itemName: itemName,
        amount: numericAmount,
        category: category,
        priority: priority,
      });
      onCreate(response.data.newExpense);
      setItemName("");
      setAmount("");
      setCategory("personal");
      setPriority("mid");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="icon">
            <Pen width={16} height={16} />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="text-left">
            <DialogTitle className="mb-2">Edit this Expense</DialogTitle>
            <DialogDescription>
              Please update the below fields to edit this expense
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start justify-center gap-3"
          >
            <Label>Item Name</Label>
            <Input
              required
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <Label>Amount</Label>
            <Input
              required
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Label>Category</Label>
            <Select onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="personal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="personal">personal</SelectItem>
                <SelectItem value="work">work</SelectItem>
                <SelectItem value="home">home</SelectItem>
                <SelectItem value="random">random</SelectItem>
              </SelectContent>
            </Select>
            <Label>Priority</Label>
            <Select onValueChange={setPriority}>
              <SelectTrigger>
                <SelectValue placeholder="mid" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">low</SelectItem>
                <SelectItem value="mid">mid</SelectItem>
                <SelectItem value="high">high</SelectItem>
              </SelectContent>
            </Select>
            <DialogClose>
              <Button type="submit" className="mt-2">
                Edit Expense
              </Button>
            </DialogClose>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditModal;
