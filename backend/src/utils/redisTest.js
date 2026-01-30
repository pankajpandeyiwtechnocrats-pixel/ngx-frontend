import redis from "./redis.js";

(async () => {
  await redis.set("ping_test", "OK");
  const value = await redis.get("ping_test");
  console.log("Redis says:", value);
  process.exit(0);
})();
