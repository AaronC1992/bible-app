import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getReadingPlans, markPlanDayComplete } from '../services/storageService';
import type { ReadingPlan } from '../types/storage';

export default function ReadingPlanPage() {
  const navigate = useNavigate();
  const [plans, setPlans] = useState<ReadingPlan[]>([]);

  useEffect(() => {
    setPlans(getReadingPlans());
  }, []);

  const handleToggle = (planId: string, day: number, completed: boolean) => {
    if (!completed) {
      markPlanDayComplete(planId, day, true);
      setPlans(getReadingPlans());
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      <div>
        <h1 className="font-serif text-2xl font-bold text-scripture-800 dark:text-scripture-100 mb-1">Reading Plan</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">Follow a structured daily reading plan through Scripture.</p>
      </div>

      {plans.map(plan => {
        const completedCount = plan.days.filter(d => d.completed).length;
        const total = plan.days.length;
        const pct = total > 0 ? Math.round((completedCount / total) * 100) : 0;

        return (
          <div key={plan.id} className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
            {/* Plan header */}
            <div className="bg-scripture-800 text-white p-5">
              <h2 className="font-serif text-lg font-semibold">{plan.name}</h2>
              <p className="text-scripture-200 text-sm mt-1">{plan.description}</p>
              <div className="mt-3 space-y-1">
                <div className="flex justify-between text-xs text-scripture-200">
                  <span>{completedCount} of {total} days complete</span>
                  <span>{pct}%</span>
                </div>
                <div className="h-2 bg-scripture-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-green-400 rounded-full transition-all duration-300"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Day list */}
            <div className="divide-y divide-gray-100 dark:divide-gray-700">
              {plan.days.map(dayEntry => (
                <div
                  key={dayEntry.day}
                  className={`flex items-center gap-3 px-4 py-3 ${dayEntry.completed ? 'bg-green-50 dark:bg-green-900/20' : 'hover:bg-gray-50 dark:hover:bg-gray-700'}`}
                >
                  <button
                    onClick={() => handleToggle(plan.id, dayEntry.day, dayEntry.completed)}
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                      dayEntry.completed
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-gray-300 dark:border-gray-600 hover:border-green-400'
                    }`}
                    title={dayEntry.completed ? 'Completed' : 'Mark complete'}
                  >
                    {dayEntry.completed && <span className="text-xs">✓</span>}
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs text-gray-400 shrink-0">Day {dayEntry.day}</span>
                      <span className={`text-sm font-medium truncate ${dayEntry.completed ? 'text-gray-400 dark:text-gray-500 line-through' : 'text-gray-700 dark:text-gray-200'}`}>
                        {dayEntry.title}
                      </span>
                    </div>
                    <button
                      onClick={() => navigate(`/reader?book=${dayEntry.bookId}&chapter=${dayEntry.chapter}`)}
                      className="text-xs text-scripture-600 dark:text-scripture-300 hover:text-scripture-800 dark:hover:text-scripture-100 mt-0.5"
                    >
                      {dayEntry.reference}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {plans.length === 0 && (
        <div className="text-center py-14 text-gray-400">
          <p className="text-4xl mb-2">📅</p>
          <p className="font-medium text-gray-500 dark:text-gray-400">No reading plans available</p>
        </div>
      )}
    </div>
  );
}
