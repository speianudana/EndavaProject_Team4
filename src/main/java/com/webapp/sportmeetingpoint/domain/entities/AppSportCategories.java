package com.webapp.sportmeetingpoint.domain.entities;

public enum AppSportCategories {
 
  // FOOTBALL_SPORTS {
  //   @Override
  //   public String getName(final int langType) {
  //     if (langType == 1) return "Football Sports";
  //     else return "";
  //   }
  // },
  // ADVENTURE_SPORTS {
  //   @Override
  //   public String getName(final int langType) {
  //     if (langType == 1) return "Adventure Sports";
  //     else return "";
  //   }
  // },
  // AIR_SPORTS {
  //   @Override
  //   public String getName(final int langType) {
  //     if (langType == 1) return "Air Sports";
  //     else return "";
  //   }
  // },
  // BOWLING_SPORTS {
  //   @Override
  //   public String getName(final int langType) {
  //     if (langType == 1) return "Bowling Sports";
  //     else return "";
  //   }
  // },
  // BEACH_SPORTS {
  //   @Override
  //   public String getName(final int langType) {
  //     if (langType == 1) return "Beach Sports";
  //     else return "";
  //   }
  // },
  // WEIGHT_LIFTING_SPORTS {
  //   @Override
  //   public String getName(final int langType) {
  //     if (langType == 1) return "Weight Lifting Sports";
  //     else return "";
  //   }
  // },
  // GOLF_SPORTS {
  //   @Override
  //   public String getName(final int langType) {
  //     if (langType == 1) return "Golf Sports";
  //     else return "";
  //   }
  // },
  // DISABLED_SPORTS {
  //   @Override
  //   public String getName(final int langType) {
  //     if (langType == 1) return "Disabled Sports";
  //     else return "";
  //   }
  // },
  // ROLLER_SPORTS {
  //   @Override
  //   public String getName(final int langType) {
  //     if (langType == 1) return "Roller Sports";
  //     else return "";
  //   }
  // },
  // RACKET_SPORTS {
  //   @Override
  //   public String getName(final int langType) {
  //     if (langType == 1) return "Racket Sports";
  //     else return "";
  //   }
  // },
  // HOCKEY_SPORTS {
  //   @Override
  //   public String getName(final int langType) {
  //     if (langType == 1) return "Hockey Sports";
  //     else return "";
  //   }
  // },
  // PADDLING_SPORTS {
  //   @Override
  //   public String getName(final int langType) {
  //     if (langType == 1) return "Paddling Sports";
  //     else return "";
  //   }
  // },
  // HORSE_SPORTS {
  //   @Override
  //   public String getName(final int langType) {
  //     if (langType == 1) return "Horse Sports";
  //     else return "";
  //   }
  // },
  // DOG_SPORTS {
  //   @Override
  //   public String getName(final int langType) {
  //     if (langType == 1) return "Dog Sports";
  //     else return "";
  //   }
  // },
  // MULTI_SPORTS {
  //   @Override
  //   public String getName(final int langType) {
  //     if (langType == 1) return "Multi Sports";
  //     else return "";
  //   }
  // },
  // HYBRID_SPORTS {
  //   @Override
  //   public String getName(final int langType) {
  //     if (langType == 1) return "Hybrid Sports";
  //     else return "";
  //   }
  // },
  // SHOOTING_SPORTS {
  //   @Override
  //   public String getName(final int langType) {
  //     if (langType == 1) return "Shooting Sports";
  //     else return "";
  //   }
  // },
  // UNDERWATER_SPORTS {
  //   @Override
  //   public String getName(final int langType) {
  //     if (langType == 1) return "Underwater Sports";
  //     else return "";
  //   }
  // },
  // WRESTLING_SPORTS {
  //   @Override
  //   public String getName(final int langType) {
  //     if (langType == 1) return "Wrestling Sports";
  //     else return "";
  //   }
  // },
  // MARTIAL_ARTS {
  //   @Override
  //   public String getName(final int langType) {
  //     if (langType == 1) return "Martial Sports";
  //     else return "";
  //   }
  // },
  // MOTORCYCLE_SPORTS {
  //   @Override
  //   public String getName(final int langType) {
  //     if (langType == 1) return "Motorcycle Sports";
  //     else return "";
  //   }
  // },
  // MIND_SPORTS {
  //   @Override
  //   public String getName(final int langType) {
  //     if (langType == 1) return "Mind Sports";
  //     else return "";
  //   }
  // },
  // OTHER_SPORTS {
  //   @Override
  //   public String getName(final int langType) {
  //     if (langType == 1) return "Other Sports";
  //     else return "";
  //   }
  // };


  FOOTBALL_SPORTS,
  ADVENTURE_SPORTS,
  AIR_SPORTS,
  BOWLING_SPORTS,
  BEACH_SPORTS,
  WEIGHT_LIFTING_SPORTS,
  GOLF_SPORTS,
  DISABLED_SPORTS,
  ROLLER_SPORTS,
  RACKET_SPORTS,
  HOCKEY_SPORTS,
  PADDLING_SPORTS,
  HORSE_SPORTS,
  DOG_SPORTS,
  MULTI_SPORTS,
  HYBRID_SPORTS,
  SHOOTING_SPORTS,
  UNDERWATER_SPORTS,
  WRESTLING_SPORTS,
  MARTIAL_ARTS,
  MOTORCYCLE_SPORTS,
  MIND_SPORTS,
  OTHER_SPORTS;

  public static AppSportCategories nameToCategory(String name) throws Exception {
    for( AppSportCategories a : AppSportCategories.values()){
      if (a.name().equals(name)) return a;
    }
    throw new Exception("Sport category name is invalid...");
  }

}
