import { ActivityOption } from "./ActivityOption";
import { optionsList } from "./optionsList";

export const ActivityOptions = () => {
  return (
    <div>
      {optionsList.map((option) => (
        <ActivityOption
          name={option.name}
          icon={option.icon}
          key={option.name}
        />
      ))}
    </div>
  );
};
