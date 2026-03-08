"use client";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipPayload,
  Label,
  LabelList,
} from "recharts";
import { IProduct } from "../../products/types/products.types";

interface IProps {
  products: IProduct[];
}

const ProductBarChart = ({ products }: IProps) => {
  const chartData = products
    .slice()
    .sort((a, b) => b.rating - a.rating)
    .map((p) => ({
      name: p.title.slice(0, 3),
      stock: p.stock,
      category: p.category,
      fullTitle: p.title,
      rate: p.rating,
    }))
    .slice(0, 10);

  const CustomTooltip = ({
    active,
    payload,
  }: {
    active: boolean;
    payload: TooltipPayload;
  }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 border border-neutral-200 shadow-xl rounded-lg flex flex-col gap-1">
          <p className="font-bold text-sm text-neutral-800">{data.fullTitle}</p>
          <p className="text-xs text-indigo-600 font-medium capitalize">
            Category: {data.category}
          </p>
          <p className="text-xs text-neutral-500">
            Stock:{" "}
            <span className="font-semibold text-neutral-800">{data.stock}</span>
          </p>
          <p className="text-xs text-neutral-500">
            Rating:{" "}
            <span className="font-semibold text-neutral-800">
              {data.rate}/5
            </span>
          </p>
        </div>
      );
    }
  };

  return (
    <div className="p-2 sm:p-4 lg:p-6 bg-white rounded-md shadow-md border border-neutral-200 h-[300px] lg:h-[400px]">
      <h2 className="text-center text-lg font-bold mb-5 text-foreground/60">
        Stock for top 10 rated products
      </h2>
      <ResponsiveContainer>
        <BarChart
          data={chartData}
          margin={{ top: 30, right: 0, left: 5, bottom: 70 }}
          barCategoryGap="3%"
        >
          <XAxis
            dataKey="name"
            padding={{ left: 0, right: 0 }}
            minTickGap={-100}
            tickLine={false}
            interval={0}
            tick={{ fontSize: 12 }}
          >
            <Label value="Products" offset={-10} position="insideBottom" />
          </XAxis>
          <YAxis
            width="auto"
            label={{
              value: "Stock",
              angle: -90,
              position: "insideLeft",
              textAnchor: "middle",
            }}
            tickLine={false}
            interval={0}
            domain={[0, 5]}
          />
          <Tooltip content={CustomTooltip} />
          <Bar
            dataKey="stock"
            fill="#8884d8"
            activeBar={{ fill: "pink", stroke: "blue" }}
            radius={[10, 10, 0, 0]}
            isAnimationActive={true}
          >
            <LabelList dataKey="stock" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductBarChart;
