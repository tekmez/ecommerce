import MyCard from "./components/Card";

export default function Home() {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "3rem",
      }}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <MyCard key={i} size="small" />
      ))}
    </div>
  );
}
