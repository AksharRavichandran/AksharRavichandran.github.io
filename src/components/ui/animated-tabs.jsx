import React, { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Tabs + panel (framer-motion cross-fade). With `integratedCard`, plain text tabs + bold selection.
 */
export function AnimatedTabs({
  tabs = [],
  defaultTab,
  className,
  layoutIdPrefix,
  integratedCard = false,
  large = false,
  fillHeight = false,
  panelClassName,
}) {
  const reactId = useId();
  const pillLayoutId = `${layoutIdPrefix ?? "tabs"}-active-pill-${reactId}`;
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  if (!tabs?.length) return null;

  const tabList = (
    <div
      className={cn(
        "flex shrink-0 flex-wrap gap-2 rounded-xl p-1",
        integratedCard
          ? "gap-x-5 gap-y-1 border-0 bg-transparent p-0 shadow-none"
          : "border border-white/[0.12] bg-[rgba(8,10,14,0.45)] shadow-inner shadow-black/20 backdrop-blur-md",
      )}
      role="tablist"
      aria-label="Story sections"
    >
      {tabs.map((tab) => {
        const selected = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={selected}
            id={`tab-trigger-${tab.id}`}
            aria-controls={`tab-panel-${tab.id}`}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative rounded-md outline-none transition-[color,font-weight] duration-200",
              integratedCard
                ? cn(
                    large ? "px-1 py-0.5 text-base" : "px-1 py-0.5 text-sm",
                    "border-0 bg-transparent shadow-none",
                    selected
                      ? "font-bold text-white"
                      : "font-medium text-white/55 hover:text-white/85",
                  )
                : cn(
                    "rounded-lg font-medium text-white/95 transition-colors",
                    large ? "px-4 py-2 text-base" : "px-3 py-1.5 text-sm",
                  ),
              "focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(5,5,5,0.4)]",
            )}
          >
            {!integratedCard && selected ? (
              <motion.div
                layoutId={pillLayoutId}
                className="absolute inset-0 rounded-lg border border-white/[0.14] bg-[rgba(12,14,20,0.88)] shadow-[0_4px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm"
                transition={{ type: "spring", stiffness: 400, damping: 34 }}
              />
            ) : null}
            <span className={cn(!integratedCard && "relative z-10")}>{tab.label}</span>
          </button>
        );
      })}
    </div>
  );

  const tabPanel = (
    <div
      className={cn(
        "text-white",
        !fillHeight && "p-4 sm:p-5",
        fillHeight && "w-full min-h-0 px-0 pb-1 pt-2 sm:px-1 sm:pt-3",
        !fillHeight && large && "min-h-[min(28dvh,200px)] md:min-h-[min(32dvh,260px)] lg:min-h-[min(36dvh,300px)]",
        !fillHeight && !large && "min-h-[200px] sm:min-h-[220px]",
        integratedCard && !fillHeight
          ? "rounded-none border-0 bg-transparent p-0 pt-4 shadow-none sm:pt-5"
          : null,
        integratedCard && fillHeight ? "rounded-none border-0 bg-transparent shadow-none" : null,
        !integratedCard &&
          "rounded-xl border border-white/[0.12] bg-[rgba(8,10,14,0.38)] p-4 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-md sm:p-5",
        panelClassName,
      )}
      role="tabpanel"
      id={`tab-panel-${activeTab}`}
      aria-labelledby={`tab-trigger-${activeTab}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {(() => {
          const tab = tabs.find((t) => t.id === activeTab);
          if (!tab) return null;
          return (
            <motion.div
              key={tab.id}
              className={cn(fillHeight && "min-h-0")}
              initial={{ opacity: 0, scale: 0.98, x: -8, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.98, x: 8, filter: "blur(6px)" }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              {tab.content}
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </div>
  );

  return (
    <div
      className={cn(
        "flex w-full max-w-lg flex-col gap-y-2",
        large && "max-w-none",
        !fillHeight && large && "gap-3",
        fillHeight && "min-h-0 flex-1",
        className,
      )}
    >
      {fillHeight ? (
        <div
          className={cn(
            "flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-y-contain",
            large ? "gap-3" : "gap-2",
          )}
        >
          {tabList}
          {tabPanel}
        </div>
      ) : (
        <>
          {tabList}
          {tabPanel}
        </>
      )}
    </div>
  );
}
