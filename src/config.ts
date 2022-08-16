export const config = {
    clubName: import.meta.env.VITE_CLUB_NAME || "Homebrew Club",
    version: import.meta.env.BREWCOMP_VERSION || "v0.0.9",
    currentYear: new Date().getFullYear(),
};
console.log(config);