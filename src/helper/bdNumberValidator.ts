export const bdNumberValidator = async (phoneNumber: any) => {
  try {
    const regex = /\+?(88)?0?1[3-9][0-9]{8}\b/g;
    let validNumber: any;
    const number = await phoneNumber.match(regex);
    if (number != null) {
      number.map((number: any) => {
        validNumber = number.slice(number.length - 11, number.length);
      });
      return validNumber;
    } else {
      return 'Invalid Number';
    }
  } catch (error) {
    if (error) throw error;
  }
};

export const bdNumberPrefixValidator = async (prefix: any) => {
  try {
    const regex = /^01[3 - 9]$/g;
    const pf = await prefix.match(regex);
    if (pf != null) {
      return prefix;
    } else {
      return 'Invalid Prefix';
    }
  } catch (error) {
    if (error) throw error;
  }
};
