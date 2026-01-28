import CurrencySwitcher from "./CurrencySwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

function PreferencesActions() {
  return (
    <div className="flex items-center gap-xs">
      <LanguageSwitcher />
      <CurrencySwitcher />
      <ThemeSwitcher />
    </div>
  );
}

export default PreferencesActions;
