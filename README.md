

# ⭐ Feedback Component

A simple, responsive feedback modal built using **React** and **Tailwind CSS** that allows users to rate their experience on a scale of 1 to 10 and stores their rating in local storage for persistence.

---

## 🧩 Features

- ✨ Clean and modern modal design with Tailwind CSS
- 📊 Rating scale from 1 to 10
- 💾 Rating is saved to `localStorage`
- 📥 Modal automatically loads saved rating
- 🔒 Click outside the modal to close
- ✅ Submit or cancel actions with confirmation


## 🚀 Getting Started

### 1. Clone or Copy the Component

```bash
git clone <your-repo-url>
```

Or copy the `FeedBack.jsx` file directly into your React project.

### 2. Install Tailwind CSS (If not already)

If you don’t have Tailwind set up, follow the [Tailwind installation guide](https://tailwindcss.com/docs/installation) or use this quick setup:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

In your `tailwind.config.js`:

```js
content: ["./src/**/*.{js,jsx,ts,tsx}"],
```

In your `index.css` or `App.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Use the Component

Import the component wherever you need it:

```jsx
import FeedBack from "./components/FeedBack";

function App() {
  return (
    <div>
      <FeedBack />
    </div>
  );
}

export default App;
```

---

## 🧠 How It Works

- Clicking the **“Give your feedback”** button opens the modal.
- Users select a rating between 1 and 10.
- The selected rating is stored in `localStorage` under the key `ratings-for-feedback`.
- On reload, the component automatically loads and highlights the previously selected rating.
- Clicking **Submit** shows a confirmation message with the selected rating.
- Clicking **Cancel** or outside the modal closes it without submitting.

---

## 📁 File Structure

```
📁 src
 ┗ 📄 FeedBack.jsx
```

---

## ⚙️ Props & Customization

Currently, this component is **self-contained** and does not accept any props. You can customize:
- The question prompt
- Colors via Tailwind classes
- Rating range (default is 1 to 10)

---

## 📦 Dependencies

- **React** (v17+)
- **Tailwind CSS** (v3+)

---

## 🧪 Future Improvements

- Add emoji or icon-based ratings
- Include a comment box
- Submit feedback to backend API
- Add animations with Framer Motion

---

## 🧑‍💻 Author

**Jonathan Mulinge**  
Software Engineer | React & Angular Dev

---

## 📄 License

This component is open-source and free to use.


### below is english certificate image 
        Modal\public\EF SET Certificate.pdf