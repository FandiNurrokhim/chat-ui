import { Folder, Star, Archive } from "lucide-react";

const items = [
  { icon: <Folder size={20} />, text: "Folder", count: 8 },
  { icon: <Star size={20} />, text: "Favorite", count: 15 },
  { icon: <Archive size={20} />, text: "Archive", count: 36 },
];

const ListWithIcons = () => {
  return (
    <div className="space-y-6 px-2 mt-5">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between text-gray-700"
        >
          <div className="flex items-center gap-2">
            {item.icon}
            <span className="text-sm font-bold">{item.text}</span>
          </div>
          <span className="text-sm font-bold">{item.count}</span>
        </div>
      ))}
    </div>
  );
};

export default ListWithIcons;
