import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Slider } from "@/components/ui/slider";

interface GameDashboardProps {
  handleStartGame?: React.MouseEventHandler;
  handleSpeedChange?: () => void;
  className?: any;
  // Add more props if necessary
}

export default function GameDashboard({
  handleStartGame,
  handleSpeedChange,
  className,
  ...props
}: GameDashboardProps) {
  const players = [
    {
      player: "CPU 1",
      Point: "321",
      Multiplier: "3.5",
    },
    {
      player: "CPU 2",
      Point: "753",
      Multiplier: "4.5",
    },
    {
      player: "YOU",
      Point: "233",
      Multiplier: "4.5",
    },
    {
      player: "CPU 3",
      Point: "233",
      Multiplier: "4.5",
    },
    {
      player: "CPU 4",
      Point: "233",
      Multiplier: "4.5",
    },
  ];
  const ranking = [
    {
      place: "1",
      name: "CPU 4",
      score: "3.5",
    },
    {
      place: "2",
      name: "CPU 3",
      score: "4.5",
    },
    {
      place: "3",
      name: "CPU 2",
      score: "4.5",
    },
    {
      place: "4",
      name: "CPU 1",
      score: "4.5",
    },
    {
      place: "5",
      name: "YOU",
      score: "4.5",
    },
  ];
  return (
    <div className="grid w-full items-start gap-6">
      <fieldset className="grid gap-6 rounded-lg border p-4">
        <div className="grid gap-3">
          <Button onClick={handleStartGame}>Start</Button>
        </div>
        <div className="grid gap-3">
          <h3>Current Record</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Name</TableHead>
                <TableHead>Point</TableHead>
                <TableHead>Multiplier</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {players.map((player) => (
                <TableRow key={player.player}>
                  <TableCell className="font-medium">{player.player}</TableCell>
                  <TableCell>{player.Point}</TableCell>
                  <TableCell>{player.Multiplier}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </fieldset>
      <fieldset className="grid gap-6 rounded-lg border p-4">
        <div className="grid gap-3">
          <h3>Speed</h3>
          <Slider
            onValueChange={handleSpeedChange}
            defaultValue={[1]}
            max={5}
            min={1}
            step={1}
            className={cn("w-[100%]", className)}
            {...props}
          />
        </div>
      </fieldset>
      <fieldset className="grid gap-6 rounded-lg border p-4">
        <div className="grid gap-3">
          <h3>Ranking</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">No</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ranking.map((ranking) => (
                <TableRow key={ranking.place}>
                  <TableCell>{ranking.place}</TableCell>
                  <TableCell>{ranking.name}</TableCell>
                  <TableCell>{ranking.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </fieldset>
    </div>
  );
}
