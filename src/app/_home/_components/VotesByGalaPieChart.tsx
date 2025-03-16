'use client'
import { Pie, PieChart } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import type { SingerVote } from '@/core/votes/domain/vote'

export const VotesByGalaPieChart = ({ votes }: { votes: SingerVote[] }) => {
  const chartConfig = votes.reduce(
    (acc, vote) => {
      acc[vote.stageName] = {
        label: vote.stageName,
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      }
      return acc
    },
    {} as Record<string, { label: string; color: string }>,
  )

  const chartData = votes.map(vote => ({
    browser: vote.stageName,
    visitors: vote.totalVotes,
    fill: chartConfig[vote.stageName]?.color || '#ccc',
  }))

  return (
    <Card className={'flex flex-col'}>
      <CardHeader className={'items-center pb-0'}>
        <CardTitle>Votos por Gala</CardTitle>
        <CardDescription>Cantidad de votos por cantantes</CardDescription>
      </CardHeader>
      <CardContent className={'flex-1 pb-0'}>
        <ChartContainer config={chartConfig} className={'mx-auto aspect-square max-h-[250px]'}>
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey={'visitors'} nameKey={'browser'} innerRadius={60} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
