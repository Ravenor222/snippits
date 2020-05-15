const nodeSearch = (event, theNode) => {
    let target = event.name;
    let name;

    if (theNode.children === null || theNode.children === undefined) {
      return console.log("no child left");
    }

    if (theNode.name === target) {
      name = theNode.name;
      return name;
    } else {
      for (const child of theNode.children) {
        if (child.name === target) {
          name = child.name;
          return name;
        } else {
          nodeSearch(event, child.name);
        }
      }
    }
  };

  export default nodeSearch