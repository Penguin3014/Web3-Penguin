export function Stats() {
  const stats = [
    { value: "10M+", label: "일일 트랜잭션" },
    { value: "99.9%", label: "네트워크 가동시간" },
    { value: "<1s", label: "블록 생성시간" },
    { value: "150+", label: "검증 노드" },
  ]

  return (
    <section className="relative py-20 border-y border-border">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold glow-text font-mono">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
