import { Trash2 } from 'lucide-react';
import { toast } from 'react-toastify';

export default function CartItem({ item, onRemove }) {
  const handleRemove = () => {
    onRemove(item.id);
    toast.info(`${item.name} removed from cart`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-base-100 rounded-xl border border-base-200 shadow-sm">
      <span className="text-2xl">{item.icon}</span>
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold text-sm truncate">{item.name}</h4>
        <p className="text-xs text-base-content/50 capitalize">{item.period}</p>
      </div>
      <span className="font-bold text-primary text-sm">${item.price}</span>
      <button onClick={handleRemove} className="btn btn-ghost btn-xs btn-circle text-error hover:bg-error/10">
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
