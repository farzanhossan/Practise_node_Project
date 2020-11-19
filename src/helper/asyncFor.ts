const sleep = async (milliseconds: any) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
export const forAsync = async () => {
  try {
    const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    let ni = 0;
    for (const element of arr) {
      console.log(`${new Date()} =====> ${ni}`);
      ni++;
      if (ni == 4) {
        ni = 0;
        await sleep(3000);
        console.log(`${new Date()} =====> ${ni}`);
      }
    }
  } catch (error) {
    if (error) throw error;
  }
};
