exports.run = async (client, message, args) => {
  if (message.webhookID) {
    return client.lib.message.send(client, message.channel, "CANNOT_WEBHOOK");
  }

  if (args.length == 0 || args[0] == "displayall") {
    //If no args are given, display current aliases.
    if (args[0] == "displayall") {
      //Display alias + hidden
      response = client.lib.alias.displayAlias(client, message, true);
    } else {
      //Don't display hidden aliases
      response = client.lib.alias.displayAlias(client, message, false);
    }
    return response;
  } else {
    //Arguments are given

    //Check if administrator
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      message.channel.send(
        "You need to be an administrator to add or delete aliases."
      );
      return {
        success: false,
        message: "You need to be an administrator to add or delete aliases.",
      };
    }

    //No second argument
    if (typeof args[1] == "undefined") {
      message.channel.send("Please specify a second argument.");
      return {
        success: false,
        message: "Please specify a second argument.",
      };
    }

    //Check the second argument
    if (args[0] == "del") {
      response = client.lib.alias.deleteAlias(client, message, args);
    } else if (args[0] == "hide") {
      response = client.lib.alias.hideAlias(client, message, args);
    } else {
      response = client.lib.alias.addAlias(client, message, args);
    }
    return response;
  }
};

module.exports.help = {
  name: "alias",
  detail:
    "See current aliases and create new ones with: ${PREFIX}alias CHANNELNAME alias.\nDelete aliases with ${PREFIX}alias del alias and hide aliases with ${PREFIX}alias hide alias.\nDisplay hidden aliases with ${PREFIX}alias displayall.\n${PREFIX}alias works aswell to move between channels.",
  enabled: true,
  aliases: ["a"],
};
