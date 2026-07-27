# 📱 Android Installation Guide for Kindling

## Quick Start: Install on Android

Kindling is a **Progressive Web App (PWA)** that works perfectly on Android devices. Follow these simple steps to install it:

### Method 1: Chrome Browser (Recommended)

1. **Open Chrome** on your Android phone
2. **Go to:** `https://github.com/moonmoon37178-spec/kindling-app`
3. **Click the three dots** (⋮) menu in the top right
4. **Select "Install app"** or **"Add to Home screen"**
5. **Tap "Install"** in the dialog that appears
6. **Done!** Kindling now appears on your home screen

### Method 2: Using Menu Prompt

1. **Open Chrome** and navigate to the Kindling app URL
2. **Look for the install prompt** (usually appears as a banner at the bottom)
3. **Tap "Install"** 
4. **Confirm the installation**
5. **App will be added to your home screen**

### Method 3: Manual Add to Home Screen

1. **Open Chrome**
2. **Navigate to Kindling**
3. **Tap the three dots** (⋮) menu
4. **Select "Add to Home screen"**
5. **Enter an app name** (or use default "Kindling")
6. **Tap "Add"**

---

## What You Get When Installed

✅ **App Icon on Home Screen** - Quick access like a native app
✅ **Standalone Experience** - Runs full screen without browser UI
✅ **Offline Support** - Works without internet (data syncs when online)
✅ **Fast Loading** - Cached for instant startup
✅ **Storage Access** - Stores all your nutrition data locally
✅ **Notifications** - Can receive reminders (Android 6.0+)

---

## App Shortcuts (Long-Press Home Icon)

After installing, **long-press the Kindling app icon** on your home screen to see quick shortcuts:

- 🍽️ **Log Meal** - Jump directly to meal logging
- 📈 **View Progress** - See your achievements and trends

---

## System Requirements

**Minimum Requirements:**
- Android 5.0 (Lollipop) or higher
- Chrome, Firefox, Edge, Samsung Internet, or any modern browser
- ~10 MB storage space

**Recommended:**
- Android 8.0 (Oreo) or higher
- Chrome 90+ (latest version)
- Sufficient storage for data (~1-5 MB depending on history length)

---

## Browser Compatibility

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome | ✅ Full | Best experience, install prompt built-in |
| Samsung Internet | ✅ Full | Great Android 9+ support |
| Firefox | ✅ Good | May need manual "Add to Home screen" |
| Edge | ✅ Good | Microsoft's mobile browser |
| Opera | ✅ Good | Alternative option |
| UC Browser | ⚠️ Limited | Older version may have issues |

---

## Installation Troubleshooting

### "Install app" option doesn't appear

**Solution 1: Update Chrome**
- Go to Google Play Store
- Search for Chrome
- Tap "Update" if available
- Restart browser and try again

**Solution 2: Use Manual Method**
- Tap menu (⋮) → "Add to Home screen"
- Manually name and confirm

**Solution 3: Check Android Version**
- Some older Android versions may not support PWA installation
- Try Firefox or Samsung Internet instead

### App won't load or shows blank screen

**Solution:**
1. Clear Chrome cache: Settings → Apps → Chrome → Storage → Clear Cache
2. Uninstall the app from home screen
3. Clear app data: Settings → Apps → Chrome → Storage → Clear Data
4. Reinstall the app

### Data isn't saving

**Solution:**
1. Check phone storage isn't full (need ~10 MB free)
2. Ensure app has storage permission: Settings → Apps → Kindling → Permissions → Storage
3. Try clearing app cache in Chrome settings
4. Restart the app

### "Allow location" or permissions prompts

**Solution:**
- Tap "Allow" or "Don't allow" as appropriate
- Kindling only needs storage permission to save your data locally
- No location access needed (unless you add weather features)

---

## Features on Android

### Available Features
✅ Log meals daily
✅ Track calories and protein
✅ Log weight and measurements
✅ View progress charts
✅ Earn achievements
✅ Customize goals
✅ Create custom food list
✅ Offline data storage
✅ Full history access

### Storage & Privacy
- **All data stored locally** on your phone
- **No cloud storage** - data never leaves your device
- **No account required** - completely private
- **Uninstall removes everything** - data deleted when app removed

---

## Uninstalling from Android

### Remove from Home Screen
1. **Long-press the Kindling icon**
2. **Tap "Remove"** or **"Uninstall"**
3. **Confirm uninstallation**

### Full Uninstall
1. Go to Settings → Apps → Kindling
2. Tap "Uninstall"
3. Confirm

**Note:** Uninstalling removes all stored data (meals, weight, history, etc.)

---

## Advanced Features

### Homescreen Shortcuts
Long-press the app icon to access quick actions for:
- Logging meals quickly
- Viewing progress instantly

### Offline Mode
- App works offline after first load
- Data syncs automatically when connection returns
- LocalStorage provides backup for critical data

### Background Sync
- Service Worker keeps app updated in background
- Automatic cache refresh when app updates
- Smooth performance even on slow networks

---

## Performance Tips

### For Best Performance:
1. **Keep app updated** - Uninstall and reinstall periodically
2. **Clear cache monthly** - Prevents slowdowns (Settings → Chrome → Storage)
3. **Ensure adequate storage** - Keep 100+ MB free on phone
4. **Use modern Android** - Android 8.0+ works best
5. **Keep browser updated** - Use latest Chrome/browser version

### Storage Usage:
- Initial install: ~2 MB
- With 1 year of data: ~5-10 MB
- With full history: ~15 MB maximum

---

## Tips & Tricks

### Quick Access
- **Pin to home screen** for fastest access
- **Add shortcuts** via long-press for quick actions
- **Widget support** coming in future versions

### Data Management
- **Export data**: Screenshot your progress tab for records
- **Backup**: Data is stored in browser storage
- **Multiple devices**: Install on each device independently

### Best Practices
- **Log daily** for best streak accuracy
- **Set realistic goals** in settings
- **Check weekly stats** for progress motivation
- **Use custom foods** to speed up logging

---

## Getting Help

### Common Issues:
- **App crashes**: Clear cache and reinstall
- **Data lost**: Check if still in localStorage (reinstall often recovers it)
- **Slow performance**: Update browser, clear cache, restart phone
- **Won't install**: Update Chrome or try different browser

### More Information:
- Visit GitHub: https://github.com/moonmoon37178-spec/kindling-app
- Check README: Full documentation available
- Main repo: kindling-app

---

## System Permissions Explained

Kindling needs:
- **Storage permission** ✅ - To save your nutrition data locally
- **Internet access** ⚠️ - Optional (for checking for updates)
- **Notifications** ⚠️ - Optional (for reminders, can be disabled)

Kindling DOES NOT need:
- ❌ Camera access
- ❌ Microphone access
- ❌ Contacts access
- ❌ Location access
- ❌ Calendar access

---

## Updating the App

### Automatic Updates:
Service Worker automatically caches new versions
- Check for updates on app open
- Updates happen in background
- No manual intervention needed

### Manual Update:
1. Uninstall app from home screen
2. Clear Chrome cache (Settings → Chrome → Storage)
3. Reinstall from browser
4. Newest version loads automatically

---

## Tips for Different Android Versions

### Android 5-7 (Older devices)
- Works but may need manual "Add to Home screen"
- Performance acceptable on modern processors
- Some PWA features limited

### Android 8+ (Recommended)
- Full PWA support
- Automatic install prompts
- Best performance
- All features available

### Android 12+ (Latest)
- Perfect support
- Best offline capabilities
- Material You design integration
- Optimal storage efficiency

---

## Accessing from Other Devices

Install on **as many Android devices as you want**:
- Each installation **independent**
- Data **NOT synced** between devices
- Each phone maintains its own history
- Consider backup strategy if using multiple phones

---

## Video Installation (If Available)

Steps to install via video:
1. Open Chrome on Android
2. Navigate to GitHub repo
3. Tap menu → "Add to Home screen"
4. Done!

---

## Feedback & Issues

Found a problem? Let us know:
- Check GitHub issues: https://github.com/moonmoon37178-spec/kindling-app/issues
- Create new issue with details
- Include Android version and browser used

---

## Frequently Asked Questions

**Q: Is my data safe?**
A: Yes! Data stays on your device. Nothing sent to servers.

**Q: Can I access my data if I uninstall?**
A: No, data is deleted with the app. Back up by screenshotting your progress.

**Q: Does it work offline?**
A: Yes! Fully offline after first load.

**Q: Can I sync across devices?**
A: Currently no. Each device is independent. Manual backup recommended.

**Q: What if my phone gets lost?**
A: Data is on that phone only. Reinstall on new phone to start fresh.

**Q: Is there a web version?**
A: Yes! Open in any browser at the GitHub link.

---

## Next Steps

1. ✅ Install app on home screen
2. 🎯 Complete onboarding (set weight & goals)
3. 📊 Start logging daily nutrition
4. 📈 Watch your progress grow
5. 🏆 Unlock achievements

---

## Additional Resources

- **Main App**: https://github.com/moonmoon37178-spec/kindling-app
- **Repository**: Full source code available
- **Documentation**: README with complete features
- **Feedback**: GitHub issues for bug reports

---

**Enjoy building your reserves!** 🔥🏋️

Happy tracking! Remember: Building reserves, not burning them.
