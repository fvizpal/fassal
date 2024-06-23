import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const CommodityDetail = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Commodity Details</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, nemo voluptatibus odio consequuntur commodi reiciendis eveniet, reprehenderit voluptatum sequi ratione itaque incidunt tempore dolorem quibusdam, modi nam optio alias. Aut?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
              className="min-h-32"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CommodityDetail