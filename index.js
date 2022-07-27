import selfcore from "selfcore";









const client = new selfcore();
const gateway = new selfcore.Gateway(
  "OTk0OTYyNzEwNjQ1MTk0ODAy.Gu_63t.9Vcsy2hxMbNJ82X9kBgdte8unkaxBg3sn0GRR4"
);

gateway.on("message", (m) => {
  if (m.channel_id === "976708263410282526") {
    let content = m.content ? m.content : { embeds: [m.embeds[0]] };

    client.sendWebhook(
      "https://discord.com/api/webhooks/1001865088120135721/DYnpnr52Ac9_RCrJii3yPDilHFXJkKSt-fz4T_f3Fc61KGjDxcc69f41cmasXgw2dpwN",
      content
    );
  }

});

