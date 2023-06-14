import s from "./Tabs.module.css";

type TabsProps = {
  menu: {
    id: number;
    label: string;
    active: boolean;
  }[]
}

export const Tabs = ({ menu }: TabsProps) => {
  return (
    <div className={s.menu}>
      {menu.map(m => (
        <button
          key={m.id}
          className={`${s.menuLink} ${m.active ? s.menuLinkActive : ""}`}
        >
          {m.label}
        </button>
      ))}
    </div>
  )
}
