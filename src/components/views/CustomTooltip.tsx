import { withStyles } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";

const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    marginTop: "5px",
    backgroundColor: "var(--mountainMeadow)",
    color: "var(--eerieBlack)",
    fontSize: "11px",
  },
}))(Tooltip);

export default CustomTooltip;
