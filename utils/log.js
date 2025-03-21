export const displayFancyLogs = () => {
  console.log(
    "%c       _                       _            _           _     _ \n      | |                     | |          | |         | |   (_)\n      | | __ _ _   _  ___  ___| |__        | | ___  ___| |__  _ \n  _   | |/ _` | | | |/ _ \\/ __| '_ \\   _   | |/ _ \\/ __| '_ \\| |\n | |__| | (_| | |_| |  __/\\__ \\ | | | | |__| | (_) \\__ \\ | | | |\n  \\____/ \\__,_|\\__, |\\___||___/_| |_|  \\____/ \\___/|___/_| |_|_|\n                __/ |                                           \n               |___/                                            ",
    "color: #6b17e8;"
  );

  console.log(
    "%c Hope you like what you see :)",
    "color: #6b17e8; padding: 6px;"
  );

  // Easter egg hint
  console.log(
    "%c 💡 Psst! There's a secret hiding in plain sight. Follow your heart, it might lead to something... interesting.",
    "color: #6b17e8; font-style: italic; padding: 6px;"
  );
};
