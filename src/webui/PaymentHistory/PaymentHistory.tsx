import { Badge, Button, Card, Stack, Text } from "@/components";
import s from "./PaymentHistory.module.css";

export const PaymentHistory = () => {
  return <>
    <Card>
      <Stack gap={4}>
        <Stack align="center" justify="space-between" direction="row">
          <Text>Payment history</Text>
          <Button>See all</Button>
        </Stack>

        <div>
          <table className={s.table}>
            <tr>
              <th>Invoice</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>
                <Text as="span">Payment invoice</Text>
                {" "}
                <Text as="span" color="primary">#3456</Text>
              </td>
              <td>
                <Text>$245.00</Text>
              </td>
              <td>
                <Text color="gray600" variant="body">March 12</Text>
              </td>
              <td><Badge /> <Text as="span" variant="body">Completed</Text></td>
            </tr>
            <tr>
              <td>
                <Text as="span">Payment invoice</Text>
                {" "}
                <Text as="span" color="primary">#3456</Text>
              </td>
              <td>
                <Text>$123.00</Text>
              </td>
              <td>
                <Text color="gray600" variant="body">March 11</Text>
              </td>
              <td><Badge /> <Text as="span" variant="body">Completed</Text></td>
            </tr>
            <tr>
              <td>
                <Text as="span">Payment invoice</Text>
                {" "}
                <Text as="span" color="primary">#3456</Text>
              </td>
              <td>
                <Text>$149.90</Text>
              </td>
              <td>
                <Text color="gray600" variant="body">March 11</Text>
              </td>
              <td><Badge /> <Text as="span" variant="body">Completed</Text></td>
            </tr>
            <tr>
              <td>
                <Text as="span">Payment invoice</Text>
                {" "}
                <Text as="span" color="primary">#3456</Text>
              </td>
              <td>
                <Text>$234.00</Text>
              </td>
              <td>
                <Text color="gray600" variant="body">March 09</Text>
              </td>
              <td><Badge /> <Text as="span" variant="body">Completed</Text></td>
            </tr>
            <tr>
              <td>
                <Text as="span">Payment invoice</Text>
                {" "}
                <Text as="span" color="primary">#3456</Text>
              </td>
              <td>
                <Text>$760.89</Text>
              </td>
              <td>
                <Text color="gray600" variant="body">March 06</Text>
              </td>
              <td><Badge /> <Text as="span" variant="body">Completed</Text></td>
            </tr>
          </table>
        </div>
      </Stack>
    </Card>
  </>
}
