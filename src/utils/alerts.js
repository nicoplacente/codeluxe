import { toast } from "sonner";

// type ToastType = "success" | "error" | "warning" | "info";
export function showAlerts(type, txt) {
  toast[type](txt);
}
