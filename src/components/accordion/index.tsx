import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { AccordionItemProps, AccordionProps } from "./type";

const variantClasses = {
  light: "bg-gray-100",
  shadow: "shadow-md",
  bordered: "border border-gray-300",
  splitted: "divide-y divide-gray-200",
};

export const Accordion: React.FC<AccordionProps> = ({
  items,
  expandMultiple = false,
  variant = "light",
  defaultExpanded = [],
  disableKeys = [],
  customIndicator,
  compact = false,
  className,
}) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(defaultExpanded);

  const handleToggle = (key: string) => {
    if (disableKeys.includes(key)) return;
    setExpandedItems((prev) => {
      if (expandMultiple) {
        return prev.includes(key)
          ? prev.filter((k) => k !== key)
          : [...prev, key];
      }
      return prev.includes(key) ? [] : [key];
    });
  };

  return (
    <div
      className={clsx(
        "accordion",
        variantClasses[variant],
        compact && "p-2",
        className
      )}
    >
      {items.map(
        ({ key, title, subtitle, content, indicator, startContent }) => (
          <AccordionItem
            key={key}
            title={title}
            subtitle={subtitle}
            content={content}
            startContent={startContent}
            isExpanded={expandedItems.includes(key)}
            onClick={() => handleToggle(key)}
            customIndicator={customIndicator}
            indicator={indicator}
          />
        )
      )}
    </div>
  );
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  subtitle,
  content,
  startContent,
  isExpanded,
  onClick,
  customIndicator,
  indicator,
}) => {
  return (
    <div className='accordion-item p-4'>
      <div
        className='flex items-center justify-between cursor-pointer'
        onClick={onClick}
      >
        <div className='flex flex-col'>
          <span className='text-lg font-medium flex items-center gap-1'>
            {startContent && startContent} {title || "Accordion title"}
          </span>
          {subtitle && (
            <span className='text-gray-500 text-sm'>{subtitle}</span>
          )}
        </div>
        {customIndicator ? (
          customIndicator(isExpanded)
        ) : (
          <span>
            {isExpanded ? (
              <BiMinus size={23} />
            ) : (
              indicator || <BiPlus size={23} />
            )}
          </span>
        )}
      </div>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className='accordion-content mt-2 overflow-hidden'
          >
            {content || "Write content here..."}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
