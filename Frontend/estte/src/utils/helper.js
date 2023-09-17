export const dateDifference = (current, createdDate) => {
    const timeDifference = current - createdDate;
    const daysRemaining = Math.abs(Math.ceil(timeDifference / (1000 * 60 * 60 * 24)));
    return daysRemaining
}