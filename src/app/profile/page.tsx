"use client";

import { useUser } from "@clerk/nextjs";
import ProfileHeader from "@/components/ProfileHeader";
import CornerElements from "@/components/CornerElements";
import { AppleIcon, DumbbellIcon } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const dummyPlans = [
  {
    name: "Young Adults Plan",
    ageRange: "18-35",
    dailyCalories: 2400,
    meals: [
      { name: "Breakfast", foods: ["Oatmeal", "Banana", "Boiled Egg"] },
      { name: "Lunch", foods: ["Grilled Chicken", "Brown Rice", "Salad"] },
      { name: "Dinner", foods: ["Paneer Stir Fry", "Quinoa", "Soup"] },
    ],
    exercisePlan: [
      { day: "Monday", routines: ["Push-ups", "Squats", "Plank"] },
      { day: "Wednesday", routines: ["Jogging", "Lunges", "Crunches"] },
      { day: "Friday", routines: ["Deadlifts", "Bench Press", "Burpees"] },
    ],
  },
  {
    name: "Middle Age Plan",
    ageRange: "36-50",
    dailyCalories: 2200,
    meals: [
      { name: "Breakfast", foods: ["Whole Wheat Toast", "Scrambled Eggs"] },
      { name: "Lunch", foods: ["Dal", "Chapati", "Cucumber Raita"] },
      { name: "Dinner", foods: ["Grilled Fish", "Steamed Veggies", "Brown Rice"] },
    ],
    exercisePlan: [
      { day: "Monday", routines: ["Brisk Walk", "Stretching"] },
      { day: "Wednesday", routines: ["Yoga", "Light Strength Training"] },
      { day: "Friday", routines: ["Cycling", "Plank", "Squats"] },
    ],
  },
  {
    name: "Senior Wellness Plan",
    ageRange: "51-65",
    dailyCalories: 2000,
    meals: [
      { name: "Breakfast", foods: ["Porridge", "Papaya", "Almonds"] },
      { name: "Lunch", foods: ["Khichdi", "Curd", "Steamed Veg"] },
      { name: "Dinner", foods: ["Vegetable Soup", "Multigrain Roti", "Paneer"] },
    ],
    exercisePlan: [
      { day: "Monday", routines: ["Walking", "Chair Squats"] },
      { day: "Wednesday", routines: ["Tai Chi", "Stretching"] },
      { day: "Friday", routines: ["Balance Drills", "Resistance Band Work"] },
    ],
  },
  {
    name: "Elder Care Plan",
    ageRange: "66-75",
    dailyCalories: 1800,
    meals: [
      { name: "Breakfast", foods: ["Dalia", "Dates", "Walnuts"] },
      { name: "Lunch", foods: ["Soft Moong Dal", "Rice", "Boiled Vegetables"] },
      { name: "Dinner", foods: ["Clear Soup", "Mashed Sweet Potatoes"] },
    ],
    exercisePlan: [
      { day: "Monday", routines: ["Assisted Walking", "Ankle Rotations"] },
      { day: "Wednesday", routines: ["Seated Leg Lifts", "Breathing Exercises"] },
      { day: "Friday", routines: ["Neck Rolls", "Chair Marching"] },
    ],
  },
];

const ProfilePage = () => {
  const { user } = useUser();

  return (
    <section className="relative z-10 pt-12 pb-32 flex-grow container mx-auto px-4">
      <ProfileHeader user={user} />

      <div className="relative backdrop-blur-sm border border-border p-6 mb-12">
        <CornerElements />
        <h2 className="text-2xl font-bold text-foreground mb-2">
          <span className="text-primary">Sample</span> Health & Diet Plans
        </h2>
        <p className="text-muted-foreground mb-6 font-mono text-sm">
          These sample plans are based on general health recommendations for different age groups.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dummyPlans.map((plan, index) => (
            <div
              key={index}
              className="border border-border rounded-lg p-6 bg-background/40 backdrop-blur-lg shadow-sm"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="text-lg font-bold text-primary">{plan.name}</div>
                <span className="font-mono text-xs text-muted-foreground">
                  Age: {plan.ageRange}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Diet Plan */}
                <div>
                  <h3 className="flex items-center gap-2 mb-2 font-bold text-foreground">
                    <AppleIcon className="w-4 h-4" /> Diet Plan
                  </h3>
                  <div className="font-mono text-sm text-muted-foreground mb-2">
                    Daily Calorie Target:{" "}
                    <span className="text-primary font-bold">{plan.dailyCalories} KCAL</span>
                  </div>
                  <div className="space-y-4">
                    {plan.meals.map((meal, mealIdx) => (
                      <div
                        key={mealIdx}
                        className="border border-border rounded-lg overflow-hidden p-3"
                      >
                        <h4 className="font-semibold text-primary mb-1">{meal.name}</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground">
                          {meal.foods.map((food, foodIdx) => (
                            <li key={foodIdx}>{food}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Exercise Plan */}
                <div>
                  <h3 className="flex items-center gap-2 mb-2 font-bold text-foreground">
                    <DumbbellIcon className="w-4 h-4" /> Exercise Plan
                  </h3>
                  <div className="space-y-4">
                    {plan.exercisePlan.map((session, sessionIdx) => (
                      <div
                        key={sessionIdx}
                        className="border border-border rounded-lg overflow-hidden p-3"
                      >
                        <h4 className="font-semibold text-primary mb-1">{session.day}</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground">
                          {session.routines.map((routine, rIdx) => (
                            <li key={rIdx}>{routine}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
