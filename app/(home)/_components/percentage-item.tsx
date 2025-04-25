import { ReactNode } from "react";

interface PercentageItemProps {
  title: string;
  value: number;
  icon: ReactNode;
}

const PercentageItem = ({ title, value, icon }: PercentageItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        {icon}
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>

      <p className="text-sm font-bold">{value || 0}%</p>
    </div>
  );
};

export default PercentageItem;
