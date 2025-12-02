import { BadgePreset, defineConfig, tierPresets } from 'sponsorkit';

const past: BadgePreset = {
  avatar: {
    size: 20,
  },
  boxWidth: 22,
  boxHeight: 22,
  container: {
    sidePadding: 35,
  },
};

export default defineConfig({
  tiers: [
    {
      title: 'Past Sponsors',
      preset: past,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 1,
      preset: {
        avatar: {
          size: 42,
        },
        boxWidth: 52,
        boxHeight: 52,
        container: {
          sidePadding: 30,
        },
      },
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 5,
      preset: tierPresets.medium,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 10,
      preset: tierPresets.large,
    },
  ],

  width: 800,
  renderer: 'tiers',
  includePastSponsors: true,
  formats: ['svg'],
});
