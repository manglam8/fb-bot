// ===== MODULES ===============================================================
import express from 'express';

// ===== STORES ================================================================
import GiftStore from '../stores/gift-store';

const router = express.Router();

// Get Gift page
router.get('/:giftId', ({params: {giftId}}, res) => {
  const gift = GiftStore.get(giftId);

  const giftJSON = JSON.stringify(gift);
  console.log(`GET Gift response: ${giftJSON}`);

  res.render(
    './index',
    {
      demo: process.env.DEMO,
      gift: giftJSON,
      title: gift.name,
    }
  );
});

export default router;
