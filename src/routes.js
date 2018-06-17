/**
 * Take an array of route objects and filter for only purple and red line and make them objects we like.
 * @param rawRoutes
 * @returns [ { departure: string, line: string }, ... ]
 */
export const refineRoutes = rawRoutes => {
  if (!rawRoutes) {
    throw new Error("Hey guess what ... tried to refine 'null' routes");
  }
  return rawRoutes.reduce((acc, route, index) => {
    if (index > 3) { return acc; }
    const partWeCareAbout = route.legs[0].steps[1].transit;
    const lineName = partWeCareAbout.line.name;
    if (lineName === 'Red Line' || lineName === 'Purple Line') {
      const reformattedRoute = {
        departure: partWeCareAbout.departure_time.text,
        line: lineName,
        key: index,
      };
      if (!checkIfDupe(reformattedRoute, acc)) {
        acc.push(reformattedRoute);
      }
    }
    return acc;
  }, []);
};

const checkIfDupe = (route, accumulatedRoutes) => {
  for (let i = 0; i < accumulatedRoutes.length; i += 1) {
    if (route.line === accumulatedRoutes[i].line && route.departure === accumulatedRoutes[i].departure) {
      return true;
    }
  }
  return false;
};
