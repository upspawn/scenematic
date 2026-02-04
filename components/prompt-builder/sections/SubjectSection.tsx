"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePromptStore } from "@/lib/store";
import { getOptions, SHOT_TYPE_MAP } from "@/data/vocabulary";
import { User, Clapperboard } from "lucide-react";

const shotTypeOptions = getOptions(SHOT_TYPE_MAP);

export function SubjectSection() {
  const { subject, setSubject } = usePromptStore();

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-4 w-4" />
          01 — Subject & Framing
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
            Subject Description
          </label>
          <Textarea
            placeholder="A man in a rubber clown mask and beige suit..."
            value={subject.description}
            onChange={(e) => setSubject({ description: e.target.value })}
            className="min-h-[80px]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
            Action / Pose
          </label>
          <Textarea
            placeholder="pulling an armed heist at a bank..."
            value={subject.action}
            onChange={(e) => setSubject({ action: e.target.value })}
            className="min-h-[60px]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">
            Environment / Setting
          </label>
          <Textarea
            placeholder="inside a posh bank with marble floors..."
            value={subject.environment}
            onChange={(e) => setSubject({ environment: e.target.value })}
            className="min-h-[60px]"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-neutral-400 uppercase tracking-wider flex items-center gap-2">
            <Clapperboard className="h-3 w-3" />
            Shot Type / Angle
          </label>
          <Select
            value={subject.shotType}
            onValueChange={(value) => setSubject({ shotType: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select shot type" />
            </SelectTrigger>
            <SelectContent>
              {shotTypeOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
}
