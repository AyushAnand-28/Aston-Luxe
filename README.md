# Aston Luxe

A premium showcase app for Aston Martin enthusiasts. The experience blends editorial storytelling with interactive shopping utilities so users can browse headline models, dive into detailed specs, locate Indian showrooms, and book a bespoke test drive directly from their phone.

## Features

- **Immersive home experience**  
  - Cinematic hero banner and editorial copy introduce the Aston Martin world.  
  - Highlight stats with sculpted tiles (heritage timeline, 0–60 mph, top speed).  
  - Quick-action card (“Book a Ride”) opens the concierge booking form from the landing screen.

- **Signature collection carousel**  
  - `FeaturedCarousel` surfaces four spotlight models with imagery, trims, and at-a-glance stats.  
  - Tapping a card routes to the dedicated detail page.

- **Full model catalogue**  
  - `ModelsScreen` reads from `src/data/models.js` (all specs centralized) and renders vertically scrolling cards with price, drivetrain, and hero imagery.  
  - Designed so adding a new model is just inserting an object into `models.js`.

- **Model detail deep-dive**  
  - High-resolution hero image with graceful loading states.  
  - Rich overview copy plus structured spec table (engine, horsepower, torque, etc.).  
  - “Book a Test Drive” CTA launches the booking form with the model name pre-filled at the top of the modal.

- **Concierge booking form (shared component)**  
  - Implemented as `BookingFormModal`, reused on Home, Contact, and Model Detail screens.  
  - Collects name, email, phone, preferred city, and optional notes.  
  - Inline validation ensures required fields before submission; successful requests display a confirmation alert.  
  - Uses `KeyboardAvoidingView` + scrollable content for comfortable entry on both iOS and Android.

- **Contact & showroom info**  
  - Primary Aston Luxe London showroom block with generic contact info.  
  - Dedicated “India Showroom” section with official Aston Martin New Delhi details, phone/email, hours, and Google Maps deep link.  
  - Mumbai’s historical showroom is listed as closed, with its own map link and notice to reach out to New Delhi for service.

- **About / brand storytelling**  
  - `AboutScreen` captures Aston Martin history, craftsmanship ethos, motorsport lineage, and bespoke services (see file for copy blocks you can tailor further).

## Project Structure

```
/src
  /components      Shared UI such as carousels, hero banner, booking modal
  /screens         Stack screens (Home, Models, ModelDetail, Contact, About)
  /data            Static data sources (`models.js`)
assets/            App icons, splash artwork
```

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the Expo app**
   ```bash
   npm start
   ```
   Use the on-screen Expo CLI options to launch iOS Simulator, Android Emulator, or scan the QR code with Expo Go.



## Roadmap Ideas

- Persist booking requests via API and show status updates inside the app.  
- Add push notifications for concierge follow-ups.  
- Integrate 360° interior/exterior viewers on the Model Detail screen.  
- Localize copy for key markets (UK, India, Middle East, etc.).

---



