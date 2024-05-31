"use client";
import { useState } from "react";
import { MinusCircle, PlusCircle } from "lucide-react";
interface PointsInputProps {
  initialValue: number;
  min: number;
  max: number;
}

const PointsInput: React.FC<PointsInputProps> = ({
  initialValue,
  min,
  max,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value);
    if (!isNaN(inputValue) && inputValue >= min && inputValue <= max) {
      setValue(inputValue);
    }
  };

  const decrementValue = () => {
    if (value > min) {
      setValue(value - 1);
    }
  };

  const incrementValue = () => {
    if (value < max) {
      setValue(value + 1);
    }
  };

  return (
    <div className="relative flex items-center max-w-[8rem]">
      <button
        type="button"
        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        onClick={decrementValue}
      >
        <MinusCircle className="w-4 h-4" />
      </button>
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={handleInputChange}
        className="min-w-[100px] bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="10"
        required
      />
      <button
        type="button"
        className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
        onClick={incrementValue}
      >
        <PlusCircle className="w-4 h-4" />
      </button>
    </div>
  );
};

export default PointsInput;
