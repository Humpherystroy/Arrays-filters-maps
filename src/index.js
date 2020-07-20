import Senators from "./data/senators";

export const republicans = () => {
  const republicans = Senators.filter((senator) => {
    if (senator.party === "Republican") {
      return true;
    }
  });
  return republicans;
};

export const democrats = () => {
  const democrats = Senators.filter((senator) => {
    if (senator.party === "Democrat") {
      return true;
    }
  });
  return democrats;
};

export const independents = () => {
  const independents = Senators.filter((senator) => {
    if (senator.party === "Independent") {
      return true;
    }
  });
  return independents;
};

export const males = () => {
  const males = Senators.filter((senator) => {
    if (senator.person.gender === "male") {
      return true;
    }
  });
  return males;
};

export const females = () => {
  const females = Senators.filter((senator) => {
    if (senator.person.gender === "female") {
      return true;
    }
  });
  return females;
};

export const byState = (state = "UT") => {
  const senators = Senators.filter((senator) => {
    if (state === senator.state) {
      return true;
    }
  });
  return state;
};

export const mapping = () => {
  const simplfiedSenators = Senators.map((senator) => {
    const newSenator = {
      firstName: senator.person.firstname,
      lastName: senator.person.lastname,
      party: senator.party,
      gender: senator.person.gender,
    };
    return newSenator;
  });
  return simplfiedSenators;
};

export const reducedCount = () => {
  const partyCounts = Senators.reduce(
    (accum, senator) => {
      if (senator.party === "Republican") {
        accum.republican++;
      } else if (senator.party === "Democrat") {
        accum.democrat++;
      } else {
        accum.independent++;
      }

      return accum;
    },
    {
      republican: 0,
      democrat: 0,
      independent: 0,
    }
  );

  return partyCounts;
};
