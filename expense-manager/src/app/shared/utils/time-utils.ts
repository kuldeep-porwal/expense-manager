/**
 * Checks if a given timestamp has expired.
 * @param timestamp - The timestamp to check against the current time.
 * @returns boolean - True if the current time is past the given timestamp, otherwise false.
 */
export function isTimeExpired(timestamp: number): boolean {
    const currentTime = Date.now();
    return currentTime > timestamp;
}
